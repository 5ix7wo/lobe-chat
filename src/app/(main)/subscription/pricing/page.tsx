/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable react/jsx-sort-props */
"use client";

import React from 'react';
import { Card, Flex, List, Button} from 'antd';



const hobbyFeatures = [
  '10 credits for each day',
];

const premiumFeatures = [
  '3000 credits for each month',
];

const ultimateFeatures = [
  '6000 credits for each month',
];


const cardStyle = {
  minWidth: 250,
  maxWidth: 280,
  width: '100%',
  // border: `1px solid #000`,
}

export default function Pricing() {
  return (
    <Flex wrap gap="small" justify="space-evenly">

      {/* ======= Hobby ======= */}

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
          dataSource={hobbyFeatures}
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

      {/* ======= Premium ======= */}

      <Card 
        title="Premium" 
        extra={"Most Popular"} 
        bordered={false}
        style={{...cardStyle, border: `1px solid #000`}}
      >
        <div>
          <div style={{ 
            fontSize: 14,
            color: '#666',
            textDecoration: 'line-through' 
          }}>
            $24.99 / month
          </div>
          <div style={{ 
            fontSize: 32,
            fontWeight: 600,
            color: '#000',
            lineHeight: 1.2
          }}>
            $19.99
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
        >
            Upgrade
        </Button>
        <div 
          style={{marginTop: 16, fontSize: 14, color: '#666'}}
        >
          Everything in Starter, plus:
        </div>
        <List
          size="small"
          bordered={false}
          split={false}
          dataSource={premiumFeatures}
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


      {/* ======= Ultimate ======= */}

      <Card 
        title="Ultimate" 
        bordered={false}
        style={cardStyle}
      >
        <div>
          <div style={{ 
            fontSize: 14,
            color: '#666',
            textDecoration: 'line-through' 
          }}>
            $49.99 / month
          </div>
          <div style={{ 
            fontSize: 32,
            fontWeight: 600,
            color: '#000',
            lineHeight: 1.2
          }}>
            $39.99
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
        >
            Upgrade
        </Button>
        <div 
          style={{marginTop: 16, fontSize: 14, color: '#666'}}
        >
          Everything in Premium, plus:
        </div>
        <List
          size="small"
          bordered={false}
          split={false}
          dataSource={ultimateFeatures}
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

    </Flex>
  );
}
