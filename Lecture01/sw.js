const status = 700;

switch (status) {
    case 200:
        console.log('Ok');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('UNk');            
}