import PropTypes from 'prop-types';
const HeadName = ({ headName }) => {
  return (
    <div className="relative mb-8 border-b border-[#ececec]">
      <h1
        className="text-mainColor text-xl font-medium pb-4 
            after:content-[''] after:bg-[#BCE3C9] after:h-0.5 after:w-20 after:absolute after:left-0 after:rtl:right-0 after:bottom-0 ">
        {headName}
      </h1>
    </div>
  );
};
HeadName.propTypes = {
  headName: PropTypes.string.isRequired,
};
export default HeadName;
