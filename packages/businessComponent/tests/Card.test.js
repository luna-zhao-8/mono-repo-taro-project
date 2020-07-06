import { renderToString } from 'nerv-server';
import Card from "../.temp/component/Card";

describe('Card snapshot', () => {
  it('render initial Card', () => {
    const component = renderToString(<Card />);
    expect(component).toMatchSnapshot()
  })
})
