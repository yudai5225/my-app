import { useRouter } from "next/router";

const SlideButtonRight = () => {

    const router = useRouter();

    const slidePage = () => {
        const route = router.route;
        const num = parseInt(route.replace(/[^0-9]/g, ''));
        const newRoute = `/${num + 1}`
        router.push(newRoute)
      }

    return (
        <div>
            <button onClick={slidePage} >link</button>
        </div>
    )
}

export default SlideButtonRight;