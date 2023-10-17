import React from "react";



function PaginationContain ({data,setTest,testData,currPage,setCurrPage}) {
    function getData(page) {
        if(page<=8 && page>=1) {
            setTest(data.slice((page-1)*10,page*10))
            setCurrPage(page)
        } else {
            return null
        }
        
    }

    return(
        <div>
            {testData.map((data) => (
                    <div className="flex items-center justify-center gap-2 m-2">
                        <div className="border border-slate-600">{data.id}</div>
                        <div className="border border-slate-600">{data.num}</div>
                    </div>
            ))}
            <div className="m-2 flex -space-x-px items-center justify-center">
                {console.log(testData)}

                <button className="list-none text-sm w-[5rem] h-[2rem] bg-slate-800 border border-slate-600 flex items-center justify-center rounded-l-lg hover:bg-slate-600 text-slate-400 hover:text-white font-bold"onClick={() => getData(currPage-1)}>上一頁</button>
                {data.map((x,y) => (
                    y<data.length/10 ? (
                        // ${是原生js插入語法}用``符號來允許插入js並非'
                        <button className={`list-none text-sm w-[2rem] h-[2rem] bg-slate-800 border border-slate-600 flex items-center justify-center text-white ${currPage == y+1 ? "bg-slate-600 text-white" : "bg-slate-800 text-slate-400"}`}  onClick={() => getData(y+1)}>{y+1}</button>
                    ) : null
                ))}
                <button className="list-none text-sm w-[5rem] h-[2rem] bg-slate-800 border border-slate-600 flex items-center justify-center rounded-r-lg hover:bg-slate-600 text-slate-400 hover:text-white font-bold"onClick={() => getData(currPage+1)}>下一頁</button>
            </div>
        </div>
    )
}

export default PaginationContain