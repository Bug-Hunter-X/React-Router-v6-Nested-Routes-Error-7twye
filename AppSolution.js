```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This corrected code uses only one `<Routes>` component.  Nested routes are handled correctly within that single `<Routes>` component.  This avoids the error and ensures correct routing behavior.