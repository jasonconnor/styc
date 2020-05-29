<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200529022139 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE score ADD times_ran INT NOT NULL, ADD enemies_slain INT NOT NULL, ADD potions_used INT NOT NULL, ADD attacks_dealt INT NOT NULL, ADD criticals_dealt INT NOT NULL, ADD attacks_taken INT NOT NULL, ADD attacks_dodged INT NOT NULL, ADD currency_spent INT NOT NULL, ADD damage_dealt INT NOT NULL, ADD damage_taken INT NOT NULL, ADD health_replenished INT NOT NULL, ADD highest_damage_dealt INT NOT NULL, ADD highest_damage_taken INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD times_ran INT NOT NULL, ADD enemies_slain INT NOT NULL, ADD potions_used INT NOT NULL, ADD attacks_dealt INT NOT NULL, ADD criticals_dealt INT NOT NULL, ADD attacks_taken INT NOT NULL, ADD attacks_dodged INT NOT NULL, ADD currency_spent INT NOT NULL, ADD damage_dealt INT NOT NULL, ADD damage_taken INT NOT NULL, ADD health_replenished INT NOT NULL, ADD highest_damage_dealt INT NOT NULL, ADD highest_damage_taken INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE score DROP times_ran, DROP enemies_slain, DROP potions_used, DROP attacks_dealt, DROP criticals_dealt, DROP attacks_taken, DROP attacks_dodged, DROP currency_spent, DROP damage_dealt, DROP damage_taken, DROP health_replenished, DROP highest_damage_dealt, DROP highest_damage_taken');
        $this->addSql('ALTER TABLE user DROP times_ran, DROP enemies_slain, DROP potions_used, DROP attacks_dealt, DROP criticals_dealt, DROP attacks_taken, DROP attacks_dodged, DROP currency_spent, DROP damage_dealt, DROP damage_taken, DROP health_replenished, DROP highest_damage_dealt, DROP highest_damage_taken');
    }
}
