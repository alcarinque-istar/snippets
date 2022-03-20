
const countOcurrence = (data, token) => {
  let re = new RegExp(token,"g");

  return (data.match(re) || []).length
}

const findMostProbableToken = (data, possible_tokens) => {
    let probable_token = {
        token: possible_tokens[0],
        ocurrences: 0
    };
    possible_tokens.forEach( token => {
        let ocurrences = countOcurrence(data, token);
        console.log(token, ": ", ocurrences);
        if (ocurrences > probable_token.ocurrences) {
            probable_token.token = token;
            probable_token.ocurrences = ocurrences;
        }
    });
    return probable_token;
};

let data = "This is, my objective,This is another,Otra Mas"
let possible_tokens = [ "\n\r", "\\\\n\\\\r", ",", ";", "\t" ];

console.log(findMostProbableToken(data, possible_tokens));

let re = new RegExp(findMostProbableToken(data, possible_tokens).token,"g");
let objectives = data.split(re)

console.log(objectives)
