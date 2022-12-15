# react-compose

## Getting Started

### Installation

```bash
npm install @buysell-technologies/react-compose
```

## Usage

```tsx
import { compose } from '@buysell-technologies/react-compose';

const Composed = compose(
  AsyncCoords
  AsyncCity
);

function DetectCity() {
  return (
    <Composed render={({ city }) => {
      if (city == null) {
        return <div>Unable to detect city.</div>;
      }
      return <div>You might be in {city}.</div>;
    }} />
  );
}

// Somewhere
<DetectCity />
```
