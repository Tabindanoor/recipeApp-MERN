import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'

const UserProfilePage = () => {
  const {currentUser, isLoading:isGetLoading} = useGetMyUser()

  const {updateUser, isLoading:isUpdateLoading} = useUpdateMyUser()

  if(isGetLoading){
    return <div>loading...</div>
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>
  }

  return (
    <div>
      <UserProfileForm 
      currentUser={currentUser}
      onSave={updateUser} 
      isLoading={isUpdateLoading}/>
    </div> 

  )
}

export default UserProfilePage
 