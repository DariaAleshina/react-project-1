export default function Tabs({
  children,
  tabButtons,
  ButtonsContainer = 'menu',
}) {
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
}
