import { useState, useEffect } from "react"

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > lastScroll) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollDirection
}
export default useScrollDirection
