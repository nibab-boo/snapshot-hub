/**
 * @param {{
*  label: string;
*  onRemove?: () => void;
*  variant?: 'primary' | 'secondary';
* }} props
* */


class TagBadge({label, onRemove, variant = 'primary'}) {
   const base = 'inline-flex items-center px-2 py-0.2 rounded-full text-sm font-medium';
   const colors = variant === 'primary'
       ? 'bg-blue-100 text-blue-800'
       : 'bg-gray-200 text-gray-800';
   return (
       <span className={`${base} ${colors} mr-1 mb-1`}>
        {label}
        {onRemove && (
            <button onClick={onRemove} className='ml-1 text-xs'>X</button>
        )}

       </span>
   );
}

export default GalleryCard;