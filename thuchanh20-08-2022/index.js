let date = [parseFloat(prompt('ngày:')), parseFloat(prompt('tháng:')), parseFloat(prompt('năm:'))];
let day = date[0];
let month = date[1];
let year = date[2];

   switch(day){
    case 31:
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            month = date[1]++;
        }
        
        switch(month){
            case 12:
            date[1] = 1;
            year = date[2]++;    
        }
        date[0] = 01 ;
        console.log('day', date[0]);
        console.log('month', date[1]);
        console.log('year', date[2]);
        break;
    case 30:
        switch(month){
            case 4:
            case 6:
            case 9:
            case 11:
            month = date[1]++;
        }
        day = 01;
        console.log('day', date[0]);
        console.log('month', date[1]);
        console.log('year', date[2]);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 16:
    case 27:
    case 28:
    case 29:
        day = date[0]++
        console.log('day', date[0]);
        console.log('month', date[1]);
        console.log('year', date[2]);
        break;
}


