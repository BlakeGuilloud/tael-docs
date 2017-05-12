function showItem(item) {
  const el = document.getElementById(item);

  el.classList.toggle('transform-active');

  const chev = document.getElementById(`${item}Chev`);

  chev.classList.toggle('transform-chev');
}

const data = [
  {
    id: 'badRequest',
    headerTitle: 'Bad Request - 400',
    detailsItem: 'The server did not understand the request.',
    snippet: 'new tael.BadRequest("Zelda44@yahoo does not appear to be a valid email address.");',
  },
  {
    id: 'unauthorized',
    headerTitle: 'Unauthorized - 401',
    detailsItem: 'The requested resource requires authentication.',
    snippet: 'new tael.Unauthorized("Please login.");',
  },
  {
    id: 'forbidden',
    headerTitle: 'Forbidden - 403',
    detailsItem: 'Access is forbidden to the requested resource.',
    snippet: 'new tael.Forbidden("You do not have permission to access that resource.")'
  },
  {
    id: 'notFound',
    headerTitle: 'Not Found - 404',
    detailsItem: 'The requested resource was not found.',
    snippet: 'new tael.NotFound("No user with id 44 exists.")'
  },
  {
    id: 'methodNotAllowed',
    headerTitle: 'Method Not Allowed - 405',
    detailsItem: 'The method specified in the request is not allowed.',
    snippet: 'new tael.MethodNotAllowed("This resource does not support the provided request method.")'
  },
  {
    id: 'conflictingRecord',
    headerTitle: 'Conflicting Record - 409',
    detailsItem: 'The request could not be completed because of a conflict.',
    snippet: 'new tael.ConflictingRecord("That username already exists.");',
  },
  {
    id: 'internalServer',
    headerTitle: 'Internal Server - 500',
    detailsItem: 'The request was not completed. The server met an unexpected condition.',
    snippet: 'new tael.InternalServer("Something very bad happened.")'
  },
];

data.forEach((item) => {
  document.getElementById('error').innerHTML +=
    `
    <div class="content__item">
      <div class="content__item-header" onclick="showItem('${item.id}')">
        <div class="content__item-header__title">
          ${item.headerTitle}
        </div>
        <img id="${item.id}Chev" class="content__item-header__chevron" src="./public/assets/chevronDown.png" alt="">
      </div>
      <div id="${item.id}" class="content__item-details">
        <div class="content__item-details__item">
          ${item.detailsItem}
        </div>
        <div class="content__item-example">
          <pre>
            <code>
  ${item.snippet}
            </code>
          </pre>
        </div>
      </div>    
    </div>
    `
});