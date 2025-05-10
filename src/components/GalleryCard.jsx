/**
 * @param {{
 *  title: string;
 *  imgSrc: string;
 *  onClick?: () => void;
 * }} props
 * */


function GalleryCard({title, imgSrc = 'https://picsum.photos/200', onClick}) {

    return (
        <div onClick={onClick} className='rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-amber-400 m-auto'>
            <img src={imgSrc} alt={title} className='w-full h-48 object-cover'/>
            <div className='p-2'>
                <h3 className='text-lg font-medium'>{title}</h3>
            </div>
        </div>
    );
}

export default GalleryCard;