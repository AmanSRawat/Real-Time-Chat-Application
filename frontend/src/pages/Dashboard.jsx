import profile from '../assets/download.png'
import { PhoneOutgoing } from 'lucide-react';
import Input from '../components/Input';
import { Send } from 'lucide-react';

const Dashboard = () => {
  const contacts = [
    {
      name: "Aman",
      status: 'Available',
      img: profile
    },
     {
      name: "Mayank",
      status: 'Available',
      img: profile
    },
     {
      name: "Sonam",
      status: 'Available',
      img: profile
    },
     {
      name: "Rahul",
      status: 'Available',
      img: profile
    }
  ]
  return (
    <div className='w-screen flex'>
      <div className='w-[25%]   h-screen bg-secondary '>
          <div className='flex items-center my-8 mx-14'>
            
            <img src={profile} alt="profile icon" className='w-[50px] h-[50px] border border-r-blue-400 rounded-full p-[2px]' />
            
            <div className='ml-4'>
              <h3 className='text-xl '>My Acount</h3>
              <p className='text-sm font-light'>Account Detatils</p>
            </div>
          </div>
          <hr />
          <div className='mx-14 mt-14'>
            <div className='text-blue-400 text-lg'>Messages</div>
            <div>
              {
                contacts.map(({name,status,img})=>{
                  return (
                    <div key={name} className='flex items-center py-8 border-b border-b-gray-300 cursor-pointer'>
            
                      <img src={img} alt="profile icon" className='w-[40px] h-[40px] border border-r-blue-400 rounded-full p-[2px]' />
                      
                      <div className='ml-4'>
                        <h3 className='text-lg font-semibold'>{name}</h3>
                        <p className='text-sm font-light text-gray-700'>{status}</p>
                      </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
      </div>
      <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[80px] mt-5 rounded-full flex items-center px-5 '>
                <div className='cursor-pointer'>
                  <img src={profile} alt="profile icon" className='w-[40px] h-[40px] border border-r-blue-400 rounded-full p-[2px]' />
                </div>
                <div className='ml-4 mr-auto'>
                  <h3 className='text-lg '>
                      Aman
                  </h3>
                  <p className='text-sm font-light text-gray-600'>online</p>
                </div>
                <div className='cursor-pointer'>
                  <PhoneOutgoing className='h-[20px] w-[20px] '/>
                </div>
            </div>
            <div className='h-[75%] w-full mt-3 overflow-y-auto border-b border-gray-200'>
              <div className=' px-5 py-14'> 
                <div className=' max-w-[40%] bg-secondary rounded-b-lg rounded-tr-xl p-4 mb-5'>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className=' max-w-[40%] bg-blue-500 rounded-b-lg rounded-tl-xl ml-auto mb-5 p-4 text-white'>
                  Lorem ipsum dolor sit Harum, libero quasi. Molestiae modi expedita atque cumque!
                </div>
                <div className=' max-w-[40%] bg-secondary rounded-b-lg rounded-tr-xl p-4 mb-5'>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className=' max-w-[40%] bg-blue-500 rounded-b-lg rounded-tl-xl ml-auto mb-5 p-4 text-white'>
                  Lorem ipsum dolor sit Harum, libero quasi. Molestiae modi expedita atque cumque!
                </div>
                <div className=' max-w-[40%] bg-secondary rounded-b-lg rounded-tr-xl p-4 mb-5'>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className=' max-w-[40%] bg-blue-500 rounded-b-lg rounded-tl-xl ml-auto mb-5 p-4 text-white'>
                  Lorem ipsum dolor sit Harum, libero quasi. Molestiae modi expedita atque cumque!
                </div>
              </div>  
            </div>
            <div className='p-4 w-full flex items-center '>
              <Input placeholder='Type a message....' className='w-[75%] p-2 px-4 border-0 shadow-md rounded-full bg-white focus:ring-0 focus:border-0 outline-none'/>
              <div className='ml-3  p-4 cursor-pointer bg-light rounded-full'>
                <Send className='h-[20px] mt-2'/>
              </div>
            </div>
      </div>
      <div className='w-[25%]  h-screen'>

      </div>
    </div>
  )
}

export default Dashboard
