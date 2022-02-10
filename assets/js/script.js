// TODO: Declare any global variables we need
let headCount = 0
let tailCount = 0

// TODO: Refactor to use function

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click',
    function(e){
        if (Math.random() > 0.5) {
            console.log('heads')
            //update image
            let pennyFace = document.querySelector('#pennyFace')
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = '2005 Penny, head side'

            //log outcome
            document.querySelector('#message').textContent ='You Flipped Heads!'
            //update JS global vars
            headCount++

            //update Dom table
            document.querySelector('#heads').textContent =headCount
            // #/total
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailCount)*100) + '%'
            document.querySelector('#tails-percent').textContent = Math.round(tailCount/(headCount+tailCount)*100) + '%'
            //update tails percentage 

        } else {
            console.log('tails')

            let pennyTail = document.querySelector('#pennyTail')
            pennyFace.src = 'assets/images/penny-tails.jpg'
            pennyFace.alt = '2005 Penny, tail side'

            document.querySelector('#message').textContent ='You Flipped Tails!'

            tailCount++

            document.querySelector('#tails').textContent =tailCount

            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailCount)*100) + '%'
            document.querySelector('#tails-percent').textContent = Math.round(tailCount/(headCount+tailCount)*100) + '%'

        }
        let randomNum = Math.random()
                                                                //console.log(Math.ceil(Math.random() * 100))
        // Flip Button Click Handler
            // TODO: Determine flip outcome
            // TODO: Update image and status message in the DOM
    
            // Update the scorboard
            // TODO: Calculate the total number of rolls/flips
            // Make variables to track the percentages of heads and tails
            // TODO: Use the calculated total to calculate the percentages
            // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
            // TODO: Update the display of each table cell
    }) 
            
    document.querySelector('#clear').addEventListener('click', function(e) {
        headCount = 0
        tailsCount = 0
        document.querySelector('#message') = "Let's Get Rolling"
        document.querySelector('#heads').textContent = 0
        document.querySelector('#tails').textContent = 0
        document.querySelector('#heads-percent').textContent = '0%'
        document.querySelector('#tails-percent').textContent = '0%'
        document.querySelector('#pennyFace').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#pennyFace').alt = '2005 penny, heads side'



                                                                //console.log(Math.random())
            
        // Clear Button Click Handler
            // TODO: Reset global variables to 0
            // TODO: Update the scoreboard (same logic as in flip button click handler)
      
    })

})