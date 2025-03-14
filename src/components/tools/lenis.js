const { default: Lenis } = require("lenis")
const { useEffect } = require("react")

const LenisHandel=()=>{
    useEffect( () => {
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      }, [])
    }
export default LenisHandel
