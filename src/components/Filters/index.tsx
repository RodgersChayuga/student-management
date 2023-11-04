import { FiFilter } from "react-icons/fi";

const Filters = () => {
  return (
    <div className="flex w-full gap-4 ml-8">
      <>
        <select className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>Country</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
      <>
        <select className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>University</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
      <>
        <select className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>Duration</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
      <>
        <select className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>Language</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
      <button
        type="button"
        className="text-gray-900 bg-green-400 hover:bg-green-300 border border-black  hover:border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 "
      >
        <FiFilter />
        Filter
      </button>
    </div>
  );
};

export default Filters;
