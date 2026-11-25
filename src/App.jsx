
import { Routes, Route } from 'react-router-dom';

import LibraryHeader from './Components/LibraryHeader';
import LibraryBooks from './Components/LibraryBooks';
import Office from './Components/Office';
import OfficeList from './Components/OfficeList';
import LibraryLogin from './Components/LibraryLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LibraryLogin />} />

      <Route path="/books" element={
        <>
          <LibraryHeader />
          <LibraryBooks />
        </>
      } />

      <Route path="/office" element={
  <>
    <LibraryHeader />
    <Office />
  </>
} />

      <Route path="/offices" element={
  <>
    <LibraryHeader />
    <OfficeList />
  </>
} />

      <Route path="*" element={<LibraryLogin />} />
    </Routes>
  );
}

export default App;
