import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageNotFound } from 'pages/PageNotFound/ui/PageNotFound';
import { checkText } from 'app/utils/checkFunctions';

test('PageNotFound | Render', (): void => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  );

  const pageElements: RegExp[] = [/404/i, /PageNotFound/i];
  checkText(pageElements);
});
