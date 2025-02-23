/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable typescript-sort-keys/interface */
import { PricingItem } from "@/types/blocks/pricing";
import { Card, List, Button} from 'antd';

const cardStyle = {
  minWidth: 250,
  maxWidth: 280,
  width: '100%',
}


const HobbyPricingItemCard = ({ features }: { features: string[] | undefined }) => {
  return (
    <Card 
      title="Hobby" 
      bordered={false}
      style={cardStyle}
    >
      <div>
        <div style={{ 
          fontSize: 14,
          color: '#666',
          textDecoration: 'line-through' 
        }}>
          $4.99 / month
        </div>
        <div style={{ 
          fontSize: 32,
          fontWeight: 600,
          color: '#000',
          lineHeight: 1.2
        }}>
          Free
        </div>
      </div>
      <List
        size="small"
        bordered={false}
        split={false}
        dataSource={features}
        style={{ width: '100%' }}
        renderItem={(item) => (
          <List.Item style={{ 
            width: '100%', 
            padding: '4px 0',
          }}>
            * {item}
          </List.Item>
        )}
      />
    </Card>
  )
}

export const PricingItemCard = ({ item, isLoading, handleCheckout }: 
  { item: PricingItem, isLoading: boolean, handleCheckout: (item: PricingItem) => void }) => {

  if (item.title === "Hobby") {
    return <HobbyPricingItemCard features={item.features} />
  }

  return (
    <Card 
        title={item.title}
        extra={item.is_popular ? "Most Popular" : undefined} 
        bordered={false}
        style={{...cardStyle, border: item.is_popular ? `1px solid #000` : undefined}}
      >
        <div>
          <div style={{ 
            fontSize: 14,
            color: '#666',
            textDecoration: 'line-through' 
          }}>
            {item.original_price} / month
          </div>
          <div style={{ 
            fontSize: 32,
            fontWeight: 600,
            color: '#000',
            lineHeight: 1.2
          }}>
            {item.price}
            <span style={{ 
              fontSize: 16,
              fontWeight: 400,
              marginLeft: 4,
              color: '#666'
            }}>
              / month
            </span>
          </div>
        </div>
        <Button 
          color="default" 
          variant="solid" 
          block={true}
          style={{marginTop: 16}}
          disabled={isLoading}
          onClick={() => handleCheckout(item)}
        >
            Upgrade
        </Button>
        <div 
          style={{marginTop: 16, fontSize: 14, color: '#666'}}
        >
          {item.features_title}
        </div>
        <List
          size="small"
          bordered={false}
          split={false}
          dataSource={item.features}
          style={{ width: '100%' }}
          renderItem={(item) => (
            <List.Item style={{ 
              width: '100%', 
              padding: '4px 0',
            }}>
              * {item}
            </List.Item>
          )}
        />
      </Card>

  );
}