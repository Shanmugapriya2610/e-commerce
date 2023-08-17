import './styles.scss'
import React, {  } from "react";
import Lottie from 'react-lottie';
import Assets from '../../assets';


const NoData = (props) => {

    const { colSpan } = props;

    return (

        <>
            {
                colSpan ? <tr>
                    <td colSpan={colSpan}>
                        <div className='container-nodata'>
                            <Lottie options={
                                {
                                    loop: true,
                                    autoplay: true,
                                    animationData: Assets.Lottie.no_data,
                                    colSpan: true,
                                }
                            }
                                height={400}
                                width={400}
                            />

                        </div>
                    </td>
                </tr> : <div>
                    <div className='container-nodata'>
                        <Lottie options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: Assets.Lottie.no_data,
                                colSpan: true,
                            }
                        }
                            height={400}
                            width={400}
                        />

                    </div>
                </div>
            }
        </>

    )

}


export default NoData;

