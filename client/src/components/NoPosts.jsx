import { VscEmptyWindow } from 'react-icons/vsc'

const NoPosts = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <VscEmptyWindow width='48' height='48' color='white' />
            <h1 className='text-white text-2xl'>There are no post</h1>
        </div>
    )
}

export default NoPosts