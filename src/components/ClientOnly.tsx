'use client'
import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react'

interface ClientOnlyProps extends PropsWithChildren {
  fallback?: ReactNode
}

export function ClientOnly({
  children,
  fallback,
  ...delegated
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const comp = fallback ?? null

  return <Fragment {...delegated}>{!hasMounted ? comp : children}</Fragment>
}
