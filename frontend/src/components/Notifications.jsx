import { MdNotifications } from 'react-icons/md';
import { MdNotificationsNone } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Notifications() {
  return (
    <div className='flex mt-2 mb-2 mr-3 items-center'>
      <button className='cursor-pointer'>
        <Link to={"/notificaciones"}>
          <MdNotificationsNone className='text-3xl'/>
        </Link>
      </button>
    </div>
  )
}
