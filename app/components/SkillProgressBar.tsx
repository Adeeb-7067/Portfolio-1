export default function(){
    return(
        <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Proficiency Levels</h3>
        <div className="space-y-4">
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-white">Frontend Development</span>
                    <span className="text-blue-400">90%</span>
                </div>
                <div className="h-2 bg-white bg-opacity-20 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-white">Backend Development</span>
                    <span className="text-blue-400">60%</span>
                </div>
                <div className="h-2 bg-white bg-opacity-20 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
    
        </div>           
    </div>
    )
}