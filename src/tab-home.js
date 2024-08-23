const makeLi = (num) => {
    let li_array = [];
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li_array.push(li);
    }
    return li_array;
}
const tab_home = () => {
    rightPart.innerText = '';
    const class_location = document.createElement('class');
    const class_open_hour = document.createElement('class');
    const location = document.createElement('h1');
    const location_description = document.createElement('p');
    const open_hour = document.createElement('h1');
    const open_hour_ul = document.createElement('ul');
    const li_elements = makeLi(2);
    class_location.className = "location";
    class_open_hour.className = "open-hour";
    location.innerText = "Location";
    location_description.innerText = "123 Sunshine Avenue, Downtown Commercial District";
    open_hour.innerText = "Business Hours";
    li_elements[0].innerText = 'Monday to Friday: 7:00 AM - 9:00 PM';
    li_elements[1].innerText = 'Saturday and Sunday: 8:00 AM - 10:00 PM';
    open_hour_ul.append(...li_elements);
    class_location.append(location, location_description);
    class_open_hour.append(open_hour, open_hour_ul);
    rightPart.append(class_location);
    rightPart.append(class_open_hour);
};

export { tab_home };