import React, { useEffect, useState } from "react";

const ratio = 2

const mmToPx = (num) => num / ratio

const Boardinput = () => {
    const CONTAINER_WIDTH = (1830)
    const CONTAINER_HEIGHT = (3630)


    const [get, set] = useState({
        Length: "",
        Width: "",
        Count: "",
    })

    useEffect(() => {
        let a = 0
        a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length))))
        //   console.log();
        console.log(a);
        

    }, [get.Count])



    const handleChange = (e) => {

        let width = e.target.name === "Width" ? +e.target.value : +get.Width
        let length = e.target.name === "Length" ? +e.target.value : +get.Length
        let count = e.target.name === "Count" ? +e.target.value : +get.Count

        let a = 0
        a = (Math.floor((CONTAINER_WIDTH) / width)) * (Math.floor((CONTAINER_HEIGHT) / (length)))

        console.log({ width, length, count })

        // if (e.target.name === "Length")
        //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(e.target.value || 0))))
        // else if (e.target.name === "Width")
        //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(e.target.value || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length || 0))))

        // else if (e.target.name === "Count") {
        //     a = (Math.floor(mmToPx(CONTAINER_WIDTH) / mmToPx(parseInt(get.Width || 0)))) * (Math.floor(mmToPx(CONTAINER_HEIGHT) / mmToPx(parseInt(get.Length || 0))))
        //     currentCount = parseInt(e.target.value)
        // }



        if (a >= count || width === 0 || length === 0 || count === 0)
            set({ ...get, [e.target.name]: e.target.value })
    }


    return <div>
        <label >
            <input type="number" name="Length" placeholder="Բարձրություն" onChange={handleChange} value={get.Length} />
            <input type="number" name="Width" placeholder="Լայնություն" style={{ margin: "10px" }} onChange={handleChange} value={get.Width} />
            <input type="number" name="Count" placeholder="Քանակ" onChange={handleChange} value={get.Count} />
        </label>

        <div className="G-flex " style={{ margin: "0px auto", width: `${mmToPx(CONTAINER_WIDTH)}px`, height: `${mmToPx(CONTAINER_HEIGHT)}px`, backgroundColor: "darkblue" }} >
            {new Array(parseInt(get.Count || 0)).fill(0).map((_, index) => { return <div className="boxItem" key={index} style={{ width: `${mmToPx(get.Width)}px`, height: `${mmToPx(get.Length)}px` }}></div> })}

        </div>

    </div>
}

export default Boardinput