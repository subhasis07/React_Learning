import { RES_LOGO_URL } from "../utils/const";

const Resturants= (props) => {

    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla
    }=resData?.info
    return(
        <div className="m-4 p-4 w-[200px] bg-slate-300 rounded-lg">
            <img className="rounded-lg" src=
            {RES_LOGO_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export const resturantWithPromoted = (Resturants) =>{
    return(props)=>{
        return(
            <div> 
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Resturants {...props}/>
            </div>
        )
    }
}

export default Resturants;