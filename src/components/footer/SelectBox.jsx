const SelectBox = ({items, label}) => {
    return ( 
<div className="select-box">
    <label className="select-box-label">{label}</label>
    <select className="select-box-input">
        {items.map(item => <option key={item.id}>{item.value}</option>)}
    </select>
</div> );
}
 
export default SelectBox;