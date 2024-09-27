import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoMatch } from './NoMatch';
import { ListingPage } from '../pages/ListingPage';
import { PreviewPage } from '../pages/PreviewPage';
import { PageView } from './PageView';

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <PageView>
        <Routes>
          <Route path="/" element={<ListingPage />}/>
          <Route path="preview/:name" element={<PreviewPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </PageView>
    </BrowserRouter>
  );
};