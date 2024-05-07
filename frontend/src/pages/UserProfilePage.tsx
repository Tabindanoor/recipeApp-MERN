import { useUpdateMyUser } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'

const UserProfilePage = () => {
  const {updateUser, isLoading} = useUpdateMyUser()

  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isLoading}/>
    </div>
  )
}

export default UserProfilePage
 