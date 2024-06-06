



import AGInput from '@/components/Forms/AGInput';
import AgSelectField from '@/components/Forms/AgSelectField';
import PHForm from '@/components/Forms/PHForm';
import donorService from '@/services/actions/donorService';
import { registerPatient } from '@/services/actions/registerPatient';
import { TDonor, TDonorRes } from '@/types/donor';
import { modifyPayload } from '@/utils/modifyPayload';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { FC } from 'react'
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import RequestForm from './components/RequestForm';

const DonorDetailsPage: FC<{ params: { username: string }, searchParams: Record<string, unknown> }> = async ({ params: { username }, searchParams }) => {

  console.log('username', username)


  const donorPromise = await donorService.getSingleDonor(username);
  const donorInfo: TDonorRes = await donorPromise.json();



  console.log('donorInfo', donorInfo)
  return (

    <>
      <div className="breadcrumb_section overflow-hidden ptb-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 text-center">
              <h2>Donor Details</h2>
              <ul>
                <li><a href="index.html">Home</a></li>
                {/* <li className="">Donor list</li>  */}
                <li className="active">{username}</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="km__message__box ptb-120">
        <div className="container">
          <div className="km__contact__form">
            <div className="row g-5">
              <RequestForm donorInfo={donorInfo?.data} />
              <div className="col-xl-5">
                <div className="km__form__content">
                  <span className="sub__title">Blood Excellence!</span>
                  <h4 className="km__form__title">Expanded Blood Donate Services Here</h4>




                  <div className='border-radious-100 p-3'>
                    <Image src={''} alt='' width={200} height={200} />
                  </div>
                  <ul className="km__address">
                    <li>
                      <i className="fa fa-user-alt" />
                      <span>Donor Name: {`${donorInfo?.data?.name.firstName} ${donorInfo?.data?.name.middleName ?? ''} ${donorInfo?.data?.name.lastName}`}</span>
                    </li>

                    <li>
                      <i className="fas fa-location-dot" />
                      <span>blood group: {donorInfo?.data?.bloogGroup}</span>
                    </li>
                    <li>
                      <i className="fa fa-phone-alt" />
                      <span>Emergency Line: {donorInfo?.data?.contactNo}</span>
                    </li>
                    <li>
                      <i className="fas fa-location-dot" />
                      <span>Location: {donorInfo?.data?.permanentAddress}</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default DonorDetailsPage