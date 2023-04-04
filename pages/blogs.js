import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const FetchBlogs = async () => {
        try {
            const response = await axios.get("https://helpful-dove-beret.cyclic.app/blogs")
            if(response.status === 200){
                setBlogs(response.data.result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FetchBlogs()
    },[])
    return (
        <div>
            <h1 className="font-bold text-2xl text-center py-10">All Blogs</h1>
            <div>
                {
                    blogs.length ? blogs.map((item) => {
                        return (
                            <div key={item.id}>
                                <h2>{item.tile}</h2>
                                <p>{item.description}</p>
                                <div dangerouslySetInnerHTML={{ __html: item.body }} id="htmlPluggedIn" className="text-xl"/>
                            </div>
                        )
                    })

                    : null
                }
            </div>
        </div>
    )
}

export default Blogs;