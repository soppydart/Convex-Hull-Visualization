const NotFound = () => {
    return (
        <div className="bg-slate-900 font-code text-white pb-5 sm:pb-8 lg:pb-15 flex flex-col">
            <h1 className='text-xl lg:text-4xl sm:text-3xl font-medium text-center pt-28'>
                This page does not exist.
            </h1>
            <div className="mx-auto mt-20">
                <svg width="256" height="256" viewBox="0 0 256 256">
                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <circle cx="45" cy="45" r="43" fill="rgb(17 24 39)" />
                        <path
                            d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 s 41 -18.393 41 -41 S 67.607 4 45 4 z"
                            fill="rgb(255,255,255)"
                            strokeLinecap="round"
                        />
                        <circle cx="31" cy="35.55" r="5" fill="rgb(255,255,255)" />
                        <circle cx="59" cy="35.55" r="5" fill="rgb(255,255,255)" />
                        <path
                            d="M 63.087 69.345 c -0.647 0 -1.283 -0.313 -1.668 -0.894 c -3.671 -5.529 -9.809 -8.83 -16.419 -8.83 s -12.749 3.301 -16.418 8.83 c -0.611 0.92 -1.852 1.173 -2.772 0.56 c -0.92 -0.61 -1.171 -1.852 -0.561 -2.772 C 29.662 59.59 37.046 55.621 45 55.621 s 15.338 3.969 19.751 10.617 c 0.611 0.921 0.36 2.162 -0.56 2.772 C 63.851 69.237 63.467 69.345 63.087 69.345 z"
                            fill="rgb(255,255,255)"
                            strokeLinecap="round"
                        />
                    </g>
                </svg>
            </div>
        </div >
    )
}

export default NotFound