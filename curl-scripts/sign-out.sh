curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
