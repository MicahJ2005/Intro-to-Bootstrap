console.log('js ready');

$(document).ready(onReady);

function onReady(){
    console.log('JQ Ready');
    
    let kitties = [];

    class Cat{
        constructor( name, breed, age){
            this.name = name;
            this.breed = breed;
            this.age = age;
        }
    }

    kitties.push(new Cat('Fred', 'black', '2'));
    kitties.push(new Cat('George', 'persian', '4'));
    kitties.push(new Cat('Rita', 'calico', '6'));
    kitties.push(new Cat('Maggie', 'tabby', '1'));
    kitties.push(new Cat('Tina', 'mix', '8'));
    kitties.push(new Cat('Alan', 'albino', '3'));
    kitties.push(new Cat('Greg', 'white', '3 '));

    let element = $('#gridTest');

    ///test loop
    for(let cat of kitties){
    let outputString = '<div class="col-4">';
    outputString += '<div class="card">';
    outputString += '<div class="card-header"><strong>' + cat.name + '</strong></div>';
    outputString += '<div class="card-body">Breed: ' + cat.breed + '</div>';
    outputString += '<div class="card-footer">Age: ' + cat.age + '</div>';
    outputString += '<div>'; //end card div
    outputString += '<div>'; // end grid div
    // outputString += '<h3>' + cat.name + '</h3>';
    // outputString += '<p>' + cat.breed + '</p>';
    // outputString += '<p>' + cat.age + '</p>';
    outputString += '</div>';
    element.append(outputString)
    }//end for loop
}
    

