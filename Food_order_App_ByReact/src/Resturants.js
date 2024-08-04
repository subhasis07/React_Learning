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
        <div className="ResCards">
            <img src=
            {RES_LOGO_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default Resturants;