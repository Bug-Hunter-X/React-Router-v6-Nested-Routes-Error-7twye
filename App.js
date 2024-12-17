```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `react-router-dom` v6.  A common mistake is to nest `Routes` components.  If you have nested routes, you should only have one `<Routes>` component at the top level of your application.