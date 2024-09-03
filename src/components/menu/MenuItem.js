export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg hover:shadow-2xl text-center hover:bg-white transition-all">
            <div className="text-center ">
                <img src='/py-2.png' className="max-h-24 block mx-auto" alt='pizza'/>
            </div>
            <h4 className="font-semibold text-xl my-3">Ofe-Akwu</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
                Add to Cart ₦300
            </button>
        </div>
    );
}