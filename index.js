function scuberGreetingForFeet(value) {
  if (value <= 199) {
    return 'This one is on me!';
  } else if (value <= 1500) {
    return 'That will be twenty bucks.';
  } else if (value <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  return 'No can do.';
}

function ternaryCheckCity(cityName) {
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': {
      return 'Thank you so much.';
    }
    case 'not as generous': {
      return 'Thank you.';
    }
    default: {
      return 'Bye.';
    }
  }
}
