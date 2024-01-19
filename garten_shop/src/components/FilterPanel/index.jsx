export default function FilterPanel(){
    return (
        <div>
            <span>Price</span>
            <input placeholder="from"/>
            <input placeholder="to"/>

            <span>Discounted items</span>
            <input type="checkbox" name="" id="" />

            <span>Sorted</span>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}