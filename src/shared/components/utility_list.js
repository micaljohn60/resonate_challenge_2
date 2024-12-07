export default function UtilityList({ label, value }) {
    return (
        <>
            <div className="text-white rounded-lg shadow-none bg-gray-600 mt-2">
                <div className="text-sm text-gray-400 pt-2 pl-2 pb-1">
                    {label}
                </div>
                <div className="text-white pt-1 pl-2 pb-3 pr-2">
                    {value}
                </div>
            </div>
        </>
    )
}