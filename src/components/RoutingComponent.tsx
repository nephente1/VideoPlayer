import { ListingPage } from '../pages/ListingPage';
import { PreviewPage } from '../pages/PreviewPage';
import { NoMatch } from './NoMatch';
import { PageView } from './PageView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageView />}>
          <Route path="/" element={<ListingPage />} />
          <Route path="preview/:name" element={<PreviewPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
