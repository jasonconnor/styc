import { useSelector } from 'react-redux'

const Profile = () => {
  const userProfile = useSelector(state => state.userProfile)

  const isLoggedIn = userProfile.complete && userProfile.data

  if (!isLoggedIn) {
    window.location.href = '/'  
  }

  return (
    <div>Profile</div>
  )
}

export default Profile