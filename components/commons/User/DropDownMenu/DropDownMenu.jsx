import cn from 'classnames'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import s from './styles.module.css'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import ClickOutside from '@lib/click-outside/click-outside'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

const LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
]

const DropdownMenu = ({ open = false }) => {
  const logout = useLogout()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  const [display, setDisplay] = useState(false)
  const { closeSidebarIfPresent } = useUI()
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      if (display) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [display])

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <div>
        <button
          className={s.avatarButton}
          onClick={() => setDisplay(!display)}
          aria-label="Menu"
        >
          <Avatar />
        </button>
        {display && (
          <ul className={s.dropdownMenu} ref={ref}>
            {LINKS.map(({ name, href }) => (
              <li key={href}>
                <div>
                  <Link href={href}>
                    <a
                      className={cn(s.link, {
                        [s.active]: pathname === href,
                      })}
                      onClick={() => {
                        setDisplay(false)
                        closeSidebarIfPresent()
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
            <li>
              <a
                className={cn(s.link, 'border-t border-accent-2 mt-4')}
                onClick={() => logout()}
              >
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </ClickOutside>
  )
}

export default DropdownMenu
