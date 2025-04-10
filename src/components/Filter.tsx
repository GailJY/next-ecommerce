'use client';


const Filter = () => {
  return (
    <div className="flex justify-between mt-12">
      <div className="flex gap-6 flex-wrap">
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option >Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option >Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option >Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option >Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option >Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
      </div>
      <div className="">
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400 ">
          <option >Sory By</option>
          <option value="Physical">Price (low to high)</option>
          <option value="Digital">Price (high to low)</option>
          <option value="Digital">Newest</option>
          <option value="Digital">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter