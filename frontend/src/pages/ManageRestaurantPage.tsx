import { useCreateMyRestaurant, useGetMyRestaurant } from '@/api/MyRestaurantApi'
import ManageRestaurantForm from '@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm'
import React from 'react'

const ManageRestaurantPage = () => {
  const {createRestaurant, isLoading} = useCreateMyRestaurant();
  const {restaurant} = useGetMyRestaurant()


  return <ManageRestaurantForm
          restaurant={restaurant}
          onSave={createRestaurant}
          isLoading={isLoading}
          

          />
}

export default ManageRestaurantPage
