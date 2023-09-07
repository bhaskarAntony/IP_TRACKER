const tracker = async ()=> {
    const URL = 'http://localhost:3000/ip';
    var city = document.getElementById("city");
    var hostname = document.getElementById("hostname");
    var country = document.getElementById("country");
    var region = document.getElementById("region");
    var location = document.getElementById("location");
    var org = document.getElementById("org");
    var postal = document.getElementById("postcode");
    var timezone = document.getElementById("timezone");
    var address = document.getElementById("address").value;

    await fetch(`${URL}/${address}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Assuming data is an object, not an array
            city.innerHTML = data.iplocation.city;
            country.innerHTML = data.iplocation.country;
            hostname.innerHTML = data.iplocation.hostname;
            region.innerHTML = data.iplocation.region;
            location.innerHTML = data.iplocation.loc;
            org.innerHTML = data.iplocation.org;
            postal.innerHTML = data.iplocation.postal;
            timezone.innerHTML = data.iplocation.timezone;
        })
        .catch(err => alert(err));
}
